let tasks = [
  {
    id: 1,
    title: "TaskFlow API Tasarımı",
    description: "Backend REST API mimarisinin ve uç noktalarının hazırlanması",
    status: "completed",
    priority: "high",
    assignee: "Hakan",
    createdAt: new Date("2026-09-20T10:00:00.000Z").toISOString()
  },
  {
    id: 2,
    title: "Postman İle API Testleri",
    description: "Tüm CRUD operasyonlarının Postman üzerinden test edilmesi ve ekran görüntülerinin alınması",
    status: "in_progress",
    priority: "high",
    assignee: "Hakan",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Veritabanı Entegrasyonu",
    description: "PostgreSQL / MongoDB entegrasyonu için ORM yapısının araştırılması",
    status: "pending",
    priority: "medium",
    assignee: "Ahmet",
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Authentication (JWT) Ekleme",
    description: "Kullanıcı giriş ve yetkilendirme middleware yapısının kurgulanması",
    status: "pending",
    priority: "low",
    assignee: "Unassigned",
    createdAt: new Date().toISOString()
  }
];

//Görev ekleme
exports.createTask = (req, res) => {
    const {title, description, status, priority, assignee} = req.body;
    if(!title){
        return res.status(400).json({success: false, message: "Başlık(title) alanı zorunludur!"})
    }

   const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || "",
    status: status || "pending",
    priority: priority || "medium",
    assignee: assignee || "Unassigned",
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json({success: true, data: newTask})
}


//Tüm görevleri listeleme
exports.getAllTasks = (req, res) => {
    res.status(200).json({success: true, data: tasks, count: tasks.length});
}


//Id'ye göre görevi getirme
exports.getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(t => t.id === parseInt(taskId));

    if(!task){
        res.status(404).json({success: false, message: `${taskId} id numaralı görev bulunamadı`})
    }

    res.status(200).json({ success: true, data: task });
}


//Görev güncelleme
exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if(!task){
        return res.status(404).json({success: false, message: `${taskId}'li görev bulunamadı. Lütfen geçerli geçerli bir id değeri girin.`})
    }

    const { title, description, status, priority, assignee } = req.body;

    if(title !== undefined && title.trim() === ""){
        return res.status(404).json({success: false, message: "Başlık metni boş olamaz. Güncellemek istemiyorsanız title alanını göndermeyin"})
    }

   
    
  if (title) task.title = title.trim();
  if (description !== undefined) task.description = description.trim();
  if (status) task.status = status;
  if (priority) task.priority = priority;
  if (assignee !== undefined) task.assignee = assignee;

  task.updatedAt = new Date().toISOString();

  res.status(200).json({ success: true, data: task });
}


//Görev Silme
exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if(taskIndex === -1){
        return res.status(404).json({success: false,message: `${taskId} id'li görev bulunamadı.`} );
    }

    tasks.splice(taskIndex,1);
    res.status(200).json({ success: true, message: `${taskId} id'li görev başarıyla silindi.` });

}
import { CheckSquare, Square } from 'lucide-react'

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Review project proposal",
      dueDate: "Today",
      priority: "High",
      completed: false
    },
    {
      id: 2,
      title: "Team meeting",
      dueDate: "Tomorrow",
      priority: "Medium",
      completed: true
    },
    {
      id: 3,
      title: "Update documentation",
      dueDate: "Next week",
      priority: "Low",
      completed: false
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50"
          >
            <button className="text-gray-400 hover:text-blue-600">
              {task.completed ? (
                <CheckSquare className="h-5 w-5 text-blue-600" />
              ) : (
                <Square className="h-5 w-5" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={task.completed ? 'line-through text-gray-500' : 'font-medium'}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Due: {task.dueDate}</span>
                <span>•</span>
                <span className={`
                  ${task.priority === 'High' ? 'text-red-500' : ''}
                  ${task.priority === 'Medium' ? 'text-yellow-500' : ''}
                  ${task.priority === 'Low' ? 'text-green-500' : ''}
                `}>
                  {task.priority} Priority
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



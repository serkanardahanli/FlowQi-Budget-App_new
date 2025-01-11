import { Mail, Star, Trash2 } from 'lucide-react'

export default function InboxPage() {
  const messages = [
    {
      id: 1,
      from: "John Doe",
      subject: "New Project Proposal",
      preview: "I wanted to discuss the new project details...",
      date: "10:30 AM",
      isStarred: true,
      isRead: false
    },
    {
      id: 2,
      from: "Jane Smith",
      subject: "Meeting Notes",
      preview: "Here are the notes from yesterday's meeting...",
      date: "Yesterday",
      isStarred: false,
      isRead: true
    },
    {
      id: 3,
      from: "Mike Johnson",
      subject: "Budget Review",
      preview: "Please review the updated budget for Q1...",
      date: "Jan 10",
      isStarred: false,
      isRead: true
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <div className="space-y-2">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 ${
              !message.isRead ? 'bg-blue-50' : ''
            }`}
          >
            <button className="text-gray-400 hover:text-yellow-400">
              <Star className={`h-5 w-5 ${message.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={`font-medium ${!message.isRead ? 'text-blue-600' : ''}`}>
                  {message.from}
                </p>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
              <p className="font-medium">{message.subject}</p>
              <p className="text-sm text-gray-500 truncate">{message.preview}</p>
            </div>
            <button className="text-gray-400 hover:text-red-400">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}



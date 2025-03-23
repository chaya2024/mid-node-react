
import { ClipboardList, Users, FileText, Image } from 'lucide-react';

function Navigate() {
const navigationItems = [
{ title: 'Todos', icon: ClipboardList, color: 'bg-emerald-500' },
{ title: 'Users', icon: Users, color: 'bg-blue-500' },
{ title: 'Posts', icon: FileText, color: 'bg-purple-500' },
{ title: 'Photos', icon: Image, color: 'bg-pink-500' },
];

return (
<div className="min-h-screen bg-gray-100 p-8">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
Welcome to the dashboard
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{ navigationItems.map((item) => (
<a key={item.title} href="#" className="group block" > <div className = {`rounded-xl p-6 transition-all duration-300
$ {item.color} hover:scale- 105 shadow-lg hover:shadow-xl`}> <div className="flex items-center space-x-4 text-white"> <item.icon className="w-8 h-8" /> <span className="text-xl font-semibold">{item.title}</span> </div> </div> </a> ))} </div> </div>
</div>
);
}

export default Navigate
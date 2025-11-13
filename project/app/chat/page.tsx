// app/chat/page.tsx
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-white overflow-hidden">
        <ChatArea />
      </main>
    </div>
  );
}
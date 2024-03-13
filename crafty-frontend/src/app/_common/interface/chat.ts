interface User {
  id: string;
  username: string;
}

interface ReadChatroom {
  id: string;
  lastChatTime: string;
  isCrafterRead: boolean;
  isCrafteeRead: boolean;
  crafter: User;
  craftee: User;
}

interface SidebarData {
  talkerName: string;
  lastChatTime: string;
  chatroomId: string;
}

enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  COMPONENT = 'COMPONENT',
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  messageType: MessageType;
  isRead: boolean;
  date: string;
  chatroomId: string;
}

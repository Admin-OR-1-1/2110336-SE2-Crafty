export interface User {
  id: string;
  username: string;
}

export interface ReadChatroom {
  id: string;
  lastChatTime: string;
  isCrafterRead: boolean;
  isCrafteeRead: boolean;
  crafter: User;
  craftee: User;
}

export interface SidebarData {
  talkerName: string;
  lastChatTime: string;
  chatroomId: string;
}

enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  COMPONENT = 'COMPONENT',
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  messageType: MessageType;
  isRead: boolean;
  date: string;
  chatroomId: string;
}

export interface PostMessage {
  chatroomId: string;
  senderId: string;
  content: string;
  messageType: MessageType | string;
}

export interface ChatroomDetail {
  id: string;
  lastChatTime: string;
  isCrafterRead: boolean;
  isCrafteeRead: boolean;
  crafter: User;
  craftee: User;
  messages: Message[];
}

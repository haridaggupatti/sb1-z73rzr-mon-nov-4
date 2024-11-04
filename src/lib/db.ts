import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

// Auth helpers
export const auth = {
  async login(email: string, password: string) {
    return await pb.collection('users').authWithPassword(email, password);
  },

  async signup(data: { email: string; password: string; name: string; phone: string }) {
    return await pb.collection('users').create(data);
  },

  async logout() {
    pb.authStore.clear();
  },

  isAuthenticated() {
    return pb.authStore.isValid;
  }
};

// Data helpers
export const api = {
  async createEnrollment(data: { courseName: string; userId: string }) {
    return await pb.collection('enrollments').create({
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
  },

  async sendMessage(data: { content: string; userId: string }) {
    return await pb.collection('messages').create({
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  async subscribeToNewsletter(email: string) {
    return await pb.collection('newsletter').create({
      email,
      subscribedAt: new Date().toISOString()
    });
  },

  // Real-time subscriptions
  subscribeToMessages(callback: (data: any) => void) {
    return pb.collection('messages').subscribe('*', callback);
  }
};
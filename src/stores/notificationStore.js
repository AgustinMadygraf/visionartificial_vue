/*
Path: src/stores/notificationStore.js
*/


import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),
  actions: {
    notify({ type = 'info', title = '', text = '' }) {
      this.notifications.push({ type, title, text, id: Date.now() })
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    },
    clearAll() {
      this.notifications = []
    }
  }
})

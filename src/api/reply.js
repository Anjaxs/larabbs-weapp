import { request } from '@/utils/request'

export function getReplies(topicId, data) {
  return request('topics/' + topicId + '/replies', {
    data: data
  })
}

export function getUserReplies(userId, data) {
  return request('users/' + userId + '/replies', {
    data: data
  })
}
import { message, type Message } from 'xsai'
import * as prompts from './prompts'
import type { Action } from '@chat-tutor/shared'

export type TextChunkAction = Action<{ chunk: string }>

export interface AgentOptions {
  apiKey: string
  baseUrl: string
  model: string
  messages: Message[]
}

export const createAgent = (options: AgentOptions) => {
  if (options.messages.length === 0 || options.messages[0].role !== 'system') {
    options.messages.unshift(
      message.system(prompts.system())
    )
  }

  // eslint-disable-next-line require-yield
  return async function* (input: string): AsyncGenerator<Action> {
    options.messages.push(
      message.user(input)
    )
  }
}

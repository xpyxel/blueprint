import {Message} from 'eris';
import {Blueprint} from '../class/client';

interface CommandMeta {
  aliases: Array<string>;
  groups: Array<string>;
}

type Executor = (ctx: Message, ref: Blueprint) => void;

/**
 * The class used to create Blueprint commands
 */
export class Command {
  public callback: Executor;
  public readonly meta: CommandMeta;
  constructor(meta: CommandMeta, callback: Executor) {
    this.meta = meta;
    this.callback = callback;
  }
}

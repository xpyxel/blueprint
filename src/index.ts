// eslint-disable-next-line node/no-unpublished-import
import 'reflect-metadata';

export {Blueprint} from './lib/class/client';
export {Command, Executor} from './lib/class/command';
export {Extension, ExtensionData, ExtensionType} from './lib/class/extension';
export {ClientEvents} from './lib/util/types';
export {Message, User, Member} from 'eris';
export * as TypeORM from 'typeorm';

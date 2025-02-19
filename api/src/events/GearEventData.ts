import { AccountId32, BlockNumber } from '@polkadot/types/interfaces';
import { BTreeMap, BTreeSet, Bool, GenericEventData, Option, Vec, u128, u32 } from '@polkadot/types';
import { GasNodeId, ReservationId } from 'types/interfaces/ids/gas';

import {
  CodeChangeKind,
  CodeId,
  DispatchStatus,
  MessageEntry,
  MessageId,
  MessageWaitedReason,
  MessageWokenReason,
  ProgramChangedKind,
  ProgramId,
  ResumeProgramSessionId,
  UserMessageReadReason,
  UserMessageSentMessage,
} from '../types';
import { ProgramDetails, QueuedDispatch } from '../types';

export class GearEventData extends GenericEventData {
  constructor(data: GenericEventData) {
    super(data.registry, data.toU8a(), data.meta, data.section, data.method);
  }
}

export interface MessageQueuedData extends GenericEventData {
  id: MessageId;
  source: AccountId32;
  destination: ProgramId;
  entry: MessageEntry;
}

export interface UserMessageSentData extends GenericEventData {
  message: UserMessageSentMessage;
  expiration: Option<BlockNumber>;
}

export interface UserMessageReadData extends GenericEventData {
  id: MessageId;
  reason: UserMessageReadReason;
}

export interface MessagesDispatchedData extends GenericEventData {
  total: u32;
  statuses: BTreeMap<MessageId, DispatchStatus>;
  stateChanges: BTreeSet<ProgramId>;
}

export interface MessageWaitedData extends GenericEventData {
  id: MessageId;
  origin: Option<GasNodeId<MessageId, ReservationId>>;
  reason: MessageWaitedReason;
  expiration: BlockNumber;
}

export interface MessageWakenData extends GenericEventData {
  id: MessageId;
  reason: MessageWokenReason;
}

export interface CodeChangedData extends GenericEventData {
  id: CodeId;
  change: CodeChangeKind;
}

export interface ProgramChangedData extends GenericEventData {
  id: ProgramId;
  change: ProgramChangedKind;
}

export interface DebugData extends GenericEventData {
  dispatchQueue: Vec<QueuedDispatch>;
  programs: Vec<ProgramDetails>;
}

export interface DebugModeData extends GenericEventData {
  enabled: Bool;
}

export interface TransferData extends GenericEventData {
  from: AccountId32;
  to: AccountId32;
  amount: u128;
}

export interface ProgramResumeSessionStartedData extends GenericEventData {
  sessionId: ResumeProgramSessionId;
  accountId: AccountId32;
  programId: ProgramId;
  sessionEndBlock: BlockNumber;
}

export interface VoucherIssuedData extends GenericEventData {
  holder: AccountId32;
  program: ProgramId;
  value: u128;
}

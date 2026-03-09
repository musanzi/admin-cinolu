import { IBase } from './base.model';
import { IEvent } from './event.model';
import { IPhase } from './phase.model';
import { IProject } from './project.model';
import { IUser } from './user.model';
import { IVenture } from './venture.model';

export interface IProjectParticipationUpvote extends IBase {
  user: IUser;
  participation: IProjectParticipation;
}

export interface IProjectParticipation extends IBase {
  user: IUser;
  project: IProject;
  venture: IVenture | null;
  phases: IPhase[];
  upvotes?: IProjectParticipationUpvote[];
  upvotesCount?: number;
  isUpvoted?: boolean;
}

export interface IEventParticipation extends IBase {
  user: IUser;
  event: IEvent;
}

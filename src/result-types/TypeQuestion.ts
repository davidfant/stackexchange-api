import {TypeAnswer} from './TypeAnswer';
import {TypeClosedDetails} from './TypeClosedDetails';
import {TypeComment} from './TypeComment';
import {TypeMigrationInfo} from './TypeMigrationInfo';
import {TypeNotice} from './TypeNotice';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypeQuestion {
  accepted_answer_id?: number;
  answer_count: number;
  answers?: TypeAnswer[];
  body?: string;
  body_markdown?: string;
  bounty_amount?: number;
  bounty_closes_date?: Date;
  bounty_user?: TypeShallowUser;
  can_close?: boolean;
  can_flag?: boolean;
  close_vote_count?: number;
  closed_date?: Date;
  closed_details?: TypeClosedDetails;
  closed_reason?: string;
  comment_count?: number;
  comments?: TypeComment[];
  community_owned_date?: Date;
  creation_date: Date;
  delete_vote_count?: number;
  down_vote_count?: number;
  downvoted?: boolean;
  favorite_count?: number;
  favorited?: boolean;
  is_answered: boolean;
  last_activity_date: Date;
  last_edit_date?: Date;
  last_editor?: TypeShallowUser;
  link: string;
  locked_date?: Date;
  migrated_from?: TypeMigrationInfo;
  migrated_to?: TypeMigrationInfo;
  notice?: TypeNotice;
  owner?: TypeShallowUser;
  protected_date?: Date;
  question_id: number;
  reopen_vote_count?: number;
  score: number;
  share_link?: string;
  tags: string[];
  title: string;
  up_vote_count?: number;
  upvoted?: boolean;
  view_count: number;
}
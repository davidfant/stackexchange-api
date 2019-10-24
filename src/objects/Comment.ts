import {ShallowUser} from './ShallowUser';

import {TypeComment} from '../result-types/TypeComment';

export class Comment {

  public body?: string;

  public bodyMarkdown?: string;

  public canFlag?: boolean;

  public commentId: number;

  public creationDate: Date;

  public edited: boolean;

  public link?: string;

  public owner?: ShallowUser;

  public postId: number;

  public postType?: 'question' | 'answer';

  public replyToUser?: ShallowUser;

  public score: number;

  public upvoted?: boolean;

  public constructor (comment: TypeComment) {
    this.body = comment.body ?? null;
    this.bodyMarkdown = comment.body_markdown ?? null;
    this.canFlag = comment.can_flag ?? null;
    this.commentId = comment.comment_id;
    this.creationDate = comment.creation_date;
    this.edited = comment.edited;
    this.link = comment.link ?? null;
    if (typeof comment.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(comment.owner);
    }
    this.postId = comment.post_id;
    this.postType = comment.post_type ?? null;
    if (typeof comment.reply_to_user === 'undefined') {
      this.replyToUser = null;
    } else {
      this.replyToUser = new ShallowUser(comment.reply_to_user);
    }
    this.score = comment.score;
    this.upvoted = comment.upvoted ?? null;
  }
}

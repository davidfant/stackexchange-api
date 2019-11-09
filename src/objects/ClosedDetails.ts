import {OriginalQuestion} from './OriginalQuestion';
import {ShallowUser} from './ShallowUser';

import {TypeClosedDetails} from '../result-types/TypeClosedDetails';

/**
 * The equivalent of [Type closed_details](https://api.stackexchange.com/docs/types/closed-details).<br>
 * This object represents details about a [[Question]] closure.
 * This object is mostly analogous "gray box" that appears below closed and on hold [[Question|Questions]].
 */
export class ClosedDetails {

  public byUsers: ShallowUser[];

  public description: string;

  public onHold: boolean;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public originalQuestions?: OriginalQuestion[];

  public reason: string;

  public constructor (closed_details: TypeClosedDetails) {
    if (typeof closed_details.by_users === 'undefined') {
      this.byUsers = null;
    } else {
      this.byUsers = closed_details.by_users
        .map((shallow_user) => new ShallowUser(shallow_user));
    }
    this.description = closed_details.description;
    this.onHold = closed_details.on_hold;
    if (typeof closed_details.original_questions === 'undefined') {
      this.originalQuestions = null;
    } else {
      this.originalQuestions = closed_details.original_questions
        .map((original_question) => new OriginalQuestion(original_question));
    }
    this.reason = closed_details.reason;
  }
}
import {TypeBadgeCount} from '../interfaces/result-types/TypeBadgeCount';

/**
 * The equivalent of [Type badge_count](https://api.stackexchange.com/docs/types/badge-count).<br>
 * This object represents the total [[Badge|Badges]], segregated by rank, a user has earned.
 */
export class BadgeCount {

  public bronze: number | null;

  public gold: number | null;

  public silver: number | null;

  public constructor (badge_count?: TypeBadgeCount) {
    this.bronze = badge_count?.bronze ?? null;
    this.gold = badge_count?.gold ?? null;
    this.silver = badge_count?.silver ?? null;
  }
}

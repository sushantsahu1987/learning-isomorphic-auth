import defineAbilityFor from "./define-ability";
import { Article } from "./entities";

const user = { id: 1, isLoggedIn: true, isModerator: false };
const ability = defineAbilityFor(user);

const canRead = ability.can("read", "Article");
console.log(canRead);

const ownArticle = new Article({ authorId: user.id });
const update = ability.can("update", ownArticle);
console.log(update);

const foreignArticle = new Article({ authorId: 2 });
const can_update = ability.can("update", foreignArticle);
console.log(can_update);

const can_create = ability.can("create", "Comment");
console.log(can_create);

const moderator = { id: 3, isModerator: true, isLoggedIn: true };

const ability_1 = defineAbilityFor(moderator);
const update_title = ability_1.can("update", "Article", "published");
console.log(update_title);
console.log(ability_1.can('update', ownArticle, 'published'));
console.log(ability_1.can('update', foreignArticle, 'title'))

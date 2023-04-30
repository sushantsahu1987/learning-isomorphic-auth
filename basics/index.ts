import defineAbilityFor from "./define-ability";
import { Article } from './entities';

const user = { id: 1, isLoggedIn: true };
const ability = defineAbilityFor(user);

const canRead = ability.can("read", "article");
console.log(canRead);

const ownArticle = new Article({ authorId: user.id });
const update = ability.can('update', ownArticle); 
console.log(update);

const someoneelseArticle = new Article({ authorId: 2 });
const can_update = ability.can('update', someoneelseArticle);
console.log(can_update);

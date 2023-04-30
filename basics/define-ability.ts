import { defineAbility } from "@casl/ability";

export default (user: { id: number, isLoggedIn: boolean }) =>
  defineAbility((can) => {
    can("read", "article");

    if (user.isLoggedIn) {
      can("update", "Article", { authorId: user.id });
    //   can("create", "Comment");
    //   can("update", "Comment", { authorId: user.id });
    }
  });

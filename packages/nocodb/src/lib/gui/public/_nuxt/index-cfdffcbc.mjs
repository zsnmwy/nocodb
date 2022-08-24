import { D as Dropdown, a as DropdownButton } from "./dropdown-049aa5ad.mjs";
Dropdown.Button = DropdownButton;
Dropdown.install = function(app) {
  app.component(Dropdown.name, Dropdown);
  app.component(DropdownButton.name, DropdownButton);
  return app;
};

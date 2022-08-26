import { D as Dropdown, a as DropdownButton } from "./dropdown-5e0a28d4.mjs";
Dropdown.Button = DropdownButton;
Dropdown.install = function(app) {
  app.component(Dropdown.name, Dropdown);
  app.component(DropdownButton.name, DropdownButton);
  return app;
};

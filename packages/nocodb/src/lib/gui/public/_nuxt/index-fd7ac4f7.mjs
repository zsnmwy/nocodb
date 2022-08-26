import { T as Tabs, _ as __unplugin_components_1 } from "./TabPane-b435e2ca.mjs";
Tabs.TabPane = __unplugin_components_1;
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
  app.component(__unplugin_components_1.name, __unplugin_components_1);
  return app;
};

import { T as Tabs, _ as __unplugin_components_1 } from "./TabPane-0a9cd9c3.mjs";
Tabs.TabPane = __unplugin_components_1;
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
  app.component(__unplugin_components_1.name, __unplugin_components_1);
  return app;
};

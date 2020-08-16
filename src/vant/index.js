import Vue from 'vue'
import { Cell, CellGroup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

import { Icon } from 'vant';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Card } from 'vant';

Vue.use(Card);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
Vue.use(Icon);

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
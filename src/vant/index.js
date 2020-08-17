import Vue from 'vue'
import { Cell, CellGroup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Toast } from 'vant';
import { Empty } from 'vant';


import { Icon } from 'vant';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Card } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { SubmitBar } from 'vant';
import { SwipeCell } from 'vant';
import { Col, Row } from 'vant';
import { Button } from 'vant';
import { Stepper } from 'vant';

Vue.use(Stepper);
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(SwipeCell);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
Vue.use(Icon);

Vue.use(Toast);
Vue.use(Empty);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconAperture,
  IconShoppingCart,
  IconHelp,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconLayout,
  IconZoomCode,
  IconSettings,
  IconBorderStyle2,
  IconAppWindow,
  IconLockAccess,
  IconList,
  Icon360,
  IconAB,
  Icon3dCubeSphereOff,
  IconYoga,
  IconActivityHeartbeat,
} from '@tabler/icons';

import { uniqueId } from 'lodash';
import guru from '../../../../assets/images/icons/guruIcon.png'


const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    // icon: IconAperture,
    icon: IconLayout,
    href: '/dashboards/modern',
    // chip: 'New',
    // chipColor: 'secondary',
  },

  {
    navlabel: true,
    subheader: 'Apps',
  },

  {
    id: uniqueId(),
    title: 'Programs',
    // icon: IconBasket,
    icon: IconBoxMultiple,
    href: '/programs/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Programs',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/programs/addPrograms',
      },
      {
        id: uniqueId(),
        title: 'Programs List',
        // icon: IconPoint,
        icon: IconList,
        href: '/programs/programsList',
      },

    ],
  },

  {
    id: uniqueId(),
    title: 'Gurus',
    // icon: IconBasket,
    icon: IconUserCircle,
    href: '/gurus/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Gurus',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/gurus/addGurus',
      },
      {
        id: uniqueId(),
        title: 'Gurus List',
        // icon: IconPoint,
        icon: IconList,
        href: '/gurus/gurusList',
      },

    ],
  },

  {
    id: uniqueId(),
    title: 'Vihars',
    // icon: IconBasket,
    icon: IconChartArea,
    href: '/vihars/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Vihars',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/vihars/addVihar',
      },
      {
        id: uniqueId(),
        title: 'Vihar List',
        // icon: IconPoint,
        icon: IconList,
        href: '/vihars/viharList',
      },

    ],
  },


  {
    id: uniqueId(),
    title: 'Pillars',
    // icon: IconBasket,
    icon: IconChartCandle,
    href: '/pillars/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Pillars',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/pillars/addPillars',
      },
      {
        id: uniqueId(),
        title: 'Pillar List',
        // icon: IconPoint,
        icon: IconList,
        href: '/pillars/pillarList',
      },

    ],
  },

];

export default Menuitems;

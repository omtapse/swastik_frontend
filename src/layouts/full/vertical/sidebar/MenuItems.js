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
    href: '/apps/programs/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Programs',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/apps/programs/programs-form',
      },
      {
        id: uniqueId(),
        title: 'Programs List',
        // icon: IconPoint,
        icon: IconList,
        href: '/apps/programs/programs-list',
      },

    ],
  },

  {
    id: uniqueId(),
    title: 'Gurus',
    // icon: IconBasket,
    icon: IconUserCircle,
    href: '/apps/gurus/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Gurus',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/apps/gurus/gurus-form',
      },
      {
        id: uniqueId(),
        title: 'Gurus List',
        // icon: IconPoint,
        icon: IconList,
        href: '/apps/gurus/gurus-list',
      },

    ],
  },

  {
    id: uniqueId(),
    title: 'Vihars',
    // icon: IconBasket,
    icon: IconChartArea,
    href: '/apps/vihars/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Vihars',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/apps/vihars/vihar-form',
      },
      {
        id: uniqueId(),
        title: 'Vihar List',
        // icon: IconPoint,
        icon: IconList,
        href: '/apps/vihars/vihar-list',
      },

    ],
  },


  {
    id: uniqueId(),
    title: 'Pillars',
    // icon: IconBasket,
    icon: IconChartCandle,
    href: '/apps/pillars/',
    children: [
      {
        id: uniqueId(),
        title: 'Add Pillars',
        // icon: IconPoint,
        icon: IconEdit,
        href: '/apps/pillars/pillar-form',
      },
      {
        id: uniqueId(),
        title: 'Pillar List',
        // icon: IconPoint,
        icon: IconList,
        href: '/apps/pillars/pillar-list',
      },

    ],
  },

];

export default Menuitems;

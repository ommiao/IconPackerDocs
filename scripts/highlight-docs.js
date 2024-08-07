const createFirstPack = {
  "id": "create-first-pack",
  "title": "Hard to start your first step?",
  "url": "https://ommiao.github.io/IconPackerDocs/2023/06/14/basic-001-create-a-new-icon-pack",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

const backupAndRestore = {
  "id": "backup-and-restore",
  "title": "Backup and restore",
  "url": "https://ommiao.github.io/IconPackerDocs/2023/09/07/basic-004-backup-and-restore/",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

const batchOperations = {
  "id": "batch-operations",
  "title": "Get to know efficient operations?",
  "url": "https://ommiao.github.io/IconPackerDocs/2023/08/21/advanced-001-efficient-batch-operations/",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

const differentPackage = {
  "id": "different-package",
  "title": "Why need different package name?",
  "url": "https://ommiao.github.io/IconPackerDocs/2023/12/01/advanced-003-different-package-name/",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

const dynamicCalendar = {
  "id": "dynamic-calendar",
  "title": "Try dynamic calendar",
  "url": "https://ommiao.github.io/IconPackerDocs/2023/12/13/advanced-004-dynamic-calendar/",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

const wordWallpaper = {
  "id": "word-wallpaper",
  "title": "Try Chinese art wallpaper",
  "url": "https://play.google.com/store/apps/details?id=cn.ommiao.wordwallpaper",
  "background": {
    "light": "FF8154AB",
    "dark": "FF8154AB"
  },
  "foreground": {
    "light": "FFFFFFFF",
    "dark": "FFFFFFFF"
  }
}

hexo.extend.generator.register('api', function (locals) {
  return {
    path: 'api/highlight-docs',
    data: [
      createFirstPack,
      backupAndRestore,
      batchOperations,
      differentPackage,
      dynamicCalendar,
      wordWallpaper
    ]
  };
});
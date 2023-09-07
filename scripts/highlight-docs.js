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

hexo.extend.generator.register('api', function (locals) {
  return {
    path: 'api/highlight-docs',
    data: [
      createFirstPack,
      batchOperations
    ]
  };
});
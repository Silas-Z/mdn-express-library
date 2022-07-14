const Book = require('../models/book');

// 显示首页
exports.index = (req, res) => { res.send('未实现：站点首页'); };

// 显示完整的书本列表
exports.book_list = (req, res) => { res.send('未实现：书本列表'); };

// 为每位书本显示详细信息的页面
exports.book_detail = (req, res) => { res.send('未实现：书本详细信息：' + req.params.id); };

// 由 GET 显示创建书本的表单
exports.book_create_get = (req, res) => { res.send('未实现：书本创建表单的 GET'); };

// 由 POST 处理书本创建操作
exports.book_create_post = (req, res) => { res.send('未实现：创建书本的 POST'); };

// 由 GET 显示删除书本的表单
exports.book_delete_get = (req, res) => { res.send('未实现：书本删除表单的 GET'); };

// 由 POST 处理书本删除操作
exports.book_delete_post = (req, res) => { res.send('未实现：删除书本的 POST'); };

// 由 GET 显示更新书本的表单
exports.book_update_get = (req, res) => { res.send('未实现：书本更新表单的 GET'); };

// 由 POST 处理书本更新操作
exports.book_update_post = (req, res) => { res.send('未实现：更新书本的 POST'); };
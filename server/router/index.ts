const Router = require('express')
// const multer = require('multer')
// const upload = multer({dest:'images_menu'})
const menuController = require('../controllers/menu-controller.ts')


const router = new Router()

router.get('/menu', menuController.getMenu)                            
router.post('/category', menuController.addCategory)                    
router.put('/category/:id', menuController.updateCategory)
router.delete('/category/:id', menuController.deleteCategory)            
router.get('/menuitem/:id', menuController.getItemMenu)                 
router.post('/menuitem',  menuController.addItemMenu)         
router.put('/menuitem/:id', menuController.updateItemMenu)                 
router.delete('/menuitem/:id', menuController.deleteItemMenu)     
router.post('/menuitem/picter',  menuController.addMenuPicter)
router.delete('/picter',  menuController.deletePicterLocal)
router.put('/menuitem/picter/:id',  menuController.updateMenuPicter)
router.delete('/menuitem/picter/:id', menuController.deleteMenuPicter)         



module.exports = router

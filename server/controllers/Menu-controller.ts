const path = require('path')
const Uuid = require('uuid')
const multer = require('multer')
const upload = multer()
const busboy = require('busboy')
const fs = require('fs')
const {validationResult} = require('express-validator')
const MenuService = require('../service/Menu-service.ts')


class MenuControoler {
    async getMenu(req:any, res:any, next:any){
        try{
            const menu = await MenuService.getMenu()
            res.header("Access-Control-Allow-Origin", "*")
            res.json(menu)
            
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async addCategory(req:any, res:any, next:any){
        try{
            const {name} = req.body
            const response = await MenuService.addCategory(name)
            res.header("Access-Control-Allow-Origin", "*")
           res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async updateCategory(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const {name} = req.body
            const response = await MenuService.updateCategory(id, name)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            console.log(e)
        }
    }

    async deleteCategory(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const response = await MenuService.deleteCategory(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            console.log(e)
        }
    }

    async getItemMenu(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const response = await MenuService.getMenuItem(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async addItemMenu(req:any, res:any, next:any){
        try{
            const {name, description, price, pic, category_id} =req.body

            const response = await MenuService.addMenuItem(name, description, price, pic, category_id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json({name, description, price, pic, category_id})
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async updateItemMenu(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const {name, description, price, pic, category_id} = req.body
            const response = await MenuService.updateMenuItem(id, name, description, price, pic, category_id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async deleteItemMenu(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const response = await MenuService.deleteMenuItem(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async addMenuPicter(req:any, res:any, next:any){
        try{
            const file = req.files.file
            // const id = req.params.id
            
            const hashName = Uuid.v4() + '.png'
            const path = (process.env.PATH_IMAGES_MENU + '/' + hashName)
 
            fs.writeFile(path, file.data, (err: string) => {
                if(err) throw new Error('Ошибка в загрузке файла')
            })
            const picter = hashName
            res.header("Access-Control-Allow-Origin", "*") 
          
            
            res.json(picter)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async deletePicterLocal(req:any, res:any, next:any){
        try{
            const {path} = req.body
           const pathFile = (process.env.PATH_IMAGES_MENU + '/' + path) 
        fs.unlink(pathFile, (err: any) => {
            if (err) throw err})

            
        res.header("Access-Control-Allow-Origin", "*") 
        res.json(path)
        } catch (e){
            next(e)
            console.log(e)
        }
        
    }

    async updateMenuPicter(req:any, res:any, next:any){
        try{
            const id = req.params.id
            const file = req.file

            const hashName = Uuid.v4() + '.png'
            const path = (process.env.PATH_IMAGES_MENU + '\\' + hashName)
            fs.writeFile(path, file.buffer, (err: string) => {
                if(err) throw new Error('Ошибка в загрузке файла')
  
            })
            const picter = hashName
           
            const response = await MenuService.updateMenuPicter(id, picter)
             res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }

    async deleteMenuPicter(req:any, res:any, next:any){
        try{
            const id = req.params.id
            
            const response = await MenuService.deleteMenuPicter(id)
            res.header("Access-Control-Allow-Origin", "*")
            res.json(response)
        } catch(e){
            next(e)
            console.log(e)
        }
    }
}


module.exports = new MenuControoler()
import { PrismaClient } from '@prisma/client'
const fs = require('fs')

const prisma = new PrismaClient()
class MenuService{

    async getMenu(){
        const allCategory = await prisma.category.findMany({
            
        })
        const allMenu = await prisma.menu_item.findMany({

        })
        return ([allCategory, allMenu])
    }

    async getCategory(id:number){
        const oneCategory = await prisma.category.findFirst({
            where: {id: Number(id)}
            
        })
        return oneCategory
    }
    

    async addCategory(name:string){
    const candidateCategory = await prisma.category.findFirst({
        where: {name: name}
    })
    if (candidateCategory){
        throw new Error('категория уже существует')
        
    }
    const newCategory = await prisma.category.create({
        data: {name}
    })
    return newCategory
    }

    async updateCategory(id:number, name:string){
        const updateCategory = await prisma.category.update({
            where: {id: Number(id)},
            data: {name: (name)}
        })
        return updateCategory

    }


    async deleteCategory(id:number){
        const category = await prisma.category.delete({
            where: {id: Number(id)}
        })
        return category
    }
    
    async getMenuItem(id:number){
        const menu_item = await prisma.menu_item.findFirst({
            where: {id: Number(id)}
            
        })
        return menu_item
    }

    async addMenuItem(name:string, description: string,
         price: number, pic: string, category_id: number){
            const category = await this.getCategory(category_id)
            if(!category){
                throw new Error('Отсуствует выбранная категория')
            }
            if(name && price && category_id){
                const newMenuItem = await prisma.menu_item.create({
                    data: {
                        name,
                        description,
                        price: Number(price),
                        pic,
                        category_id: Number(category_id)
                    }
                })
                return newMenuItem
            }

            throw new Error('Не заполнены обязательные поля')
            
        
        
        
        }

    async updateMenuItem(id:number, name:string, description: string,
        price: number, pic: string, category_id: number){

        //   const del = this.deleteMenuPicter(id)
        
        const menuItem = await prisma.menu_item.update({
            where: {id: Number(id)},
            data: {name,
                description,
                price: Number(price),
                pic,
                category_id: Number(category_id)}
        })
        return menuItem
    
        }


    
        async deleteMenuItem(id:number){
            this.deleteMenuPicter(id)
            const menuItem = await prisma.menu_item.delete({
                where: {id: Number(id)}
            })
            return menuItem
        
        }
        
        async deleteMenuPicter(id: number){
            const oldPath = await prisma.menu_item.findFirst({
                where:{id: Number(id)},
                
            })
            if(oldPath?.pic){
                fs.unlink(oldPath?.pic, (err: any) => {
                if (err) throw err
            })
            }
             
            const menuItem = await prisma.menu_item.update({
                where: {id: Number(id)},
                data: {pic: ''}
            })
            return menuItem
        }

        async updateMenuPicter(id: number, pic:string){
            const oldPath = await prisma.menu_item.findFirst({
                where:{id: Number(id)},
            })
            if(oldPath?.pic){
                 fs.unlink(oldPath?.pic, (err: any) => {
                if (err) throw err
            })
            }
           
            const menuItem = await prisma.menu_item.update({
                where: {id: Number(id)},
                data: {pic: pic}
            })
            return menuItem
        }
}


module.exports = new MenuService()
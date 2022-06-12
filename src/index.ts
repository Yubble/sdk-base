/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-10-31 12:07:29
 */
import { module1, getEvenNo } from './module1'

const namelog = void module1('Yubble')

const evenNo = getEvenNo([3, 5, 12, 9, 17, 28, 4])

namelog()s

const obj = { name: 'Yubble' }

console.log('找到 obj 中的name is ', Reflect.get(obj, 'name'))

console.log('执行数组找偶, res is ', evenNo)
import { SetStateAction, useEffect, useState } from 'react'
import '../App.scss'




function TodolistConents() {


  type Tdata = {
    id: number,
    content: string,
    do: boolean
  }

  const [inputValue, setinputValue] = useState('')

  const [data, setdata] = useState([
    { id: 1, content: '把昨天没有完成的代码写完', do: true },
    { id: 2, content: '学学太极拳', do: true },
    { id: 3, content: '算算过年要包几个红包', do: true },
    { id: 4, content: '给女儿买个礼物', do: true },

  ])

  const [listData, setListData] = useState<Tdata[]>([])

  const bottonList = ['全部', '代办', '已读']

  useEffect(() => {
    setListData(data)

  }, [data])



  function handleInputChange(event: { target: { value: SetStateAction<string> } }) {
    setinputValue(event.target.value)
  }



  // 添加
  function addVal(ev: string) {
    setdata(
      [
        { id: data[0].id >= data.length ? data[0].id + 1 : data.length + 1, content: ev, do: true },
        ...data,
      ]
    )
    setListData(data)
    setinputValue('')
    return
  }

  // 刪除
  function deleteVal(ev: number) {
    setdata(data.filter((item: Tdata) => item.id != ev))
    setListData(data)
  }

  // 切换按钮
  function switchClick(ids: number) {
    setdata(() => {
      return data.map((item: Tdata) => {
        if (item.id == ids) {
          // 创建一个新的对象，然后修改 do 的值
          item = { id: item.id, content: item.content, do: !item.do }
        }
        return item;
      })
    })
    setListData(data)

  }


  // 創建div
  function MyComponent(cenver: Tdata) {
    if (cenver.do) {
      return <div className='textdata'  >{cenver.content} </div>
    } else {
      return <div className='textdatadelete'  >{cenver.content} </div>
    }
  }


  // 底部按钮

  function screen(ev: string) {
    switch (ev) {
      case '全部':
        setListData(data)
        break;
      case '代办':
        setListData(data.filter((item: Tdata) => item.do == true))
        break;
      case '已读':
        setListData(data.filter((item: Tdata) => item.do == false))
        break;
    }
  }

  return (
    <>
      <div className="Todolist">
        <div className='title'>
          {/* 标题 */}
          <div className='titleName'>
            {'TodoList'}
          </div>
          {/* input框 和 按钮 */}
          <div className='inputdiv'>
            <input className='input' type="text" onChange={handleInputChange} value={inputValue} />
            <button className='botton' onClick={() => addVal(inputValue)} >{'添加新事项'}</button>
          </div>
          {/* list 列表 */}
          <div className='text' >
            {listData.map((item: Tdata) => (

              <div className='textdiv' key={item.id}>
                {/* <div className='textdata'  >{item.content} </div> */}
                {MyComponent(item)}
                <div className='btn' >
                  {/* 切换 */}
                  <div className='Completed' onClick={() => switchClick(item.id)}>
                    {item.do ? '代办' : '已读'}
                  </div>
                  {/* 删除 */}
                  <div className='delete' onClick={() => deleteVal(item.id)}>
                    删除
                  </div>
                </div>
              </div>
            ))
            }
          </div>
          {/* 底部盒子 */}
          <div className='botdev'>
            {
              bottonList.map((item: string, index: number) => (
                <div key={index} onClick={() => screen(item)}>{item}</div>
              ))
            }
          </div>

        </div>
      </div>
    </>
  )
}


export default TodolistConents
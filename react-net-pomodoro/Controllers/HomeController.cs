using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using react_net_pomodoro.Models;

namespace react_net_pomodoro.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<TodoModel> _todos; //載入 model
        // 這邊的資料先直接寫入，還沒連資料庫
        static HomeController()
        {
            _todos = new List<TodoModel>
            {
                new TodoModel
                {
                    Id = 1,
                    Text = "THE FIRST THING TO DO TODAY",
                    IsChecked = false,
                    IsActivated = true,
                    IsPause = false,
                    Amounts = 4,
                },
                new TodoModel
                {
                    Id = 2,
                    Text = "THE SECOND THING TO DO TODAY",
                    IsChecked = false,
                    IsActivated = false,
                    IsPause = false,
                    Amounts = 3
                },
                new TodoModel
                {
                    Id = 3,
                    Text = "THE THIRD THING TO DO TODAY",
                    IsChecked = false,
                    IsActivated = false,
                    IsPause = false,
                    Amounts = 1
                }
            };
        }

        [Route("todos")] //設定路由輸出這包資料
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Todos()
        {
            return Json(_todos);
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}

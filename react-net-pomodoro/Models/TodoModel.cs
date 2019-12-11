// 資料
using System;
namespace react_net_pomodoro.Models
{
    public class TodoModel
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsChecked { get; set; }
        public bool IsActivated { get; set; }
        public bool IsPause { get; set; }
        public int Amounts { get; set; }
    }
}

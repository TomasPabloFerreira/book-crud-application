using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using book_crud_application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace book_crud_application.Pages.BookList
{
	public class CreateModel : PageModel
	{
		private readonly ApplicationDbContext _db;

		public CreateModel (ApplicationDbContext db)
		{
			_db = db;
		}

		public Book Book { get; set; }

		public void OnGet()
		{
		}
	}
}

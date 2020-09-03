using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using book_crud_application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace book_crud_application.Pages.BookList
{
	public class EditModel : PageModel
	{
		private ApplicationDbContext _db;

		public EditModel (ApplicationDbContext db)
		{
			_db = db;
		}


		[BindProperty]
		public Book Book { get; set; }

		public async Task OnGet(int id)
		{
			Book = await _db.Book.FindAsync(id);
		}
	}
}

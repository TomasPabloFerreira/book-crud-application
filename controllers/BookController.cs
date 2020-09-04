using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using book_crud_application.Models;
using Microsoft.AspNetCore.Mvc;

namespace book_crud_application.controllers
{
	[Route("api/Book")]
	[ApiController]
	public class BookController : Controller
	{
		private readonly ApplicationDbContext _db;

		public BookController(ApplicationDbContext db)
		{
			_db = db;
		}

		[HttpGet]
		public IActionResult GetAll()
		{
			return Json(new { data = _db.Book.ToList() });
		}
	
	}
}

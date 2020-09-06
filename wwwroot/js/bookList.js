$(document).ready(function () {
    loadDataTable();
});

const confirmDelete = () =>
	confirm('Are you sure you want to delete this book?')

loadDataTable = () => {
	$('#DT_load').DataTable({
		"ajax": {
			"url": "/api/book",
			"type": "GET",
			"datatype": "json"
		},
		"columns": [
			{ "data": "name" },
			{ "data": "author" },
			{ "data": "isbn" },
			{
				"data": "id",
				"render": function (data) {
					return `<div class="text-center">
						<a href="/BookList/Edit?id=${data}" class='btn btn-success text-white' style='cursor:pointer; width:70px;'>
							Edit
						</a>
						&nbsp;
						<a class='btn btn-danger text-white' style='cursor:pointer; width:70px;'
							onclick=Delete('/api/book?id='+${data})>
							Delete
						</a>
						</div>`;
				}, "width": "20%"
			}
		],
		"language": {
			"emptyTable": "no data found"
		},
		"width": "100%"
	});
}

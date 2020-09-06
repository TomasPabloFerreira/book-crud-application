let table

$(document).ready(function () {
    table = loadDataTable();
});

const confirmDelete = () =>
	confirm('Are you sure you want to delete this book?')

const deleteBook = async (url) => {
	const result = await fetch(url, { method: 'DELETE' })
	const data = await result.json()
	if(data.success) {
		toastr.success(data.message)
		table.ajax.reload();
	} else {
		toastr.error(data.message)
	}
}

const deleteAlert = (url) => {
	new swal({
		title: "Are you sure?",
		text: "Once deleted, you will not be able to recover this imaginary file!",
		icon: "warning",
		showCancelButton: true,
		  showCloseButton: true
	}).then((willDelete) => {
		if(willDelete.value) deleteBook(url)
	})
}

loadDataTable = () => {
	return $('#DT_load').DataTable({
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
							onclick=deleteAlert('/api/book?id='+${data})>
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

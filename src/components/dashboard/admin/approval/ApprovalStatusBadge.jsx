export default function ApprovalStatusBadge({ status }) {

  const colors = {

    "Pending Approval": "bg-yellow-100 text-yellow-700",

    Published: "bg-green-100 text-green-700",

    Unpublished: "bg-red-100 text-red-700"

  };

  return (

    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${colors[status]}`}
    >

      {status}

    </span>

  );

}
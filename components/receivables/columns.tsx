"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatCurrency, formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ReceivableWithContact } from "@/types/receivables"
import { ActionCell } from "./action-cell"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<ReceivableWithContact>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todo"
        className="rounded-xs"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
        className="rounded-xs"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "contact",
    header: "Cliente",
    cell: ({ row }) => {
      const receivable = row.original
      return (
        <div>
          <div className="font-medium">{receivable.contact.name}</div>
          <div className="text-sm text-muted-foreground">
            {receivable.contact.phone}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Monto",
    cell: ({ row }) => {
      const amountCents = parseFloat(row.getValue("amountCents"))
      return <div className="font-medium">{formatCurrency(amountCents)}</div>
    },
  },
  {
    accessorKey: "dueDate",
    header: "Vencimiento",
    cell: ({ row }) => {
      return <div>{formatDate(row.getValue("dueDate"))}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold 
          ${
            status === "OPEN"
              ? "bg-blue-100 text-blue-800"
              : status === "OVERDUE"
              ? "bg-red-100 text-red-800"
              : status === "CLOSED"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status === "OPEN"
            ? "Pendiente"
            : status === "OVERDUE"
            ? "Vencido"
            : status === "CLOSED"
            ? "Cerrado"
            : "Otro"}
        </span>
      )
    },
  },
  {
    accessorKey: "notes",
    header: "Concepto",
    cell: ({ row }) => {
      return <div>{row.getValue("notes") || "Sin concepto"}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionCell receivable={row.original} />
  }
]

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface OrderDetailsProps { }

export function OrderDetails(props: OrderDetailsProps) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 1234</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground" >
                                        Pendente
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                Estevão Bilua
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                946555769
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Email</TableCell>
                            <TableCell className="flex justify-end">
                                biluadevcod@gmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                15min
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Pepperoni</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,98</TableCell>
                            <TableCell className="text-right">R$ 139,88</TableCell>
                        </TableRow>
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">
                                R$ 139,88
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}
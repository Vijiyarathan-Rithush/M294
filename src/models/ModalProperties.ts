export type ModalProperties =
{
    children: ({ setOpen }: { setOpen: (open: boolean) => void }) => React.ReactNode;
}
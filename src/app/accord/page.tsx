import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AccordPage = () => {
  const faq = [
    {
      question: "tes1",
      answer: "answer",
    },
    {
      question: "tes1",
      answer: "answer",
    },
    {
      question: "tes1",
      answer: "answer",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-full ">
        <main className="p-4 w-[500px] ">
          {faq.map((eachdata) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{eachdata.question}</AccordionTrigger>
                <AccordionContent>{eachdata.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </main>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AccordPage;

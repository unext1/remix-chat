import MyDialog from '~/components/chat';

// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();

//   const title = formData.get('title');
//   console.log(title);

//   return redirect('');
// }

const Index = () => {
  return (
    <div>
      <MyDialog />
    </div>
  );
};
export default Index;

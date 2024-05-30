import {
    List,
    Create,
    Edit,
    SimpleForm,
    Datagrid,
    TextField,
    SelectInput,
    TextInput,
    DateInput,
    ReferenceInput,
    ReferenceField,
    DateField,
    required
  } from "react-admin";

export const BlogPostList = (props: any) => (
<List disableAuthentication {...props}>
    <Datagrid rowClick="edit">
    <TextField source="title" />
    <ReferenceField source="category.id" reference="categories">
        <TextField source="title" />
    </ReferenceField>
    <TextField source="status" />
    <DateField source="createdAt" />
    </Datagrid>
</List>
);

export const BlogPostCreate = (props: any) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]}/>
        <ReferenceInput source="category_id" reference="categories">
          <SelectInput optionText="title" validate={[required()]}/>
        </ReferenceInput>
        <TextInput source="content"  validate={[required()]}/>
        <SelectInput source="status" validate={[required()]}
          choices={[
            { id: 'draft', name: 'Draft' },
            { id: 'published', name: 'Published' },
          ]}
        />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Create>
  );
  
  export const BlogPostEdit = (props: any) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title"  validate={[required()]}/>
        <ReferenceInput source="category_id" reference="categories">
          <SelectInput optionText="title"  validate={[required()]} />
        </ReferenceInput>
        <TextInput source="content"  validate={[required()]}/>
        <SelectInput source="status" validate={[required()]}
          choices={[
            { id: 'draft', name: 'Draft' },
            { id: 'published', name: 'Published' },
          ]}
        />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Edit>
  );

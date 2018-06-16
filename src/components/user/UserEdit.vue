<template>
    <div>
        <h3>User id: {{$route.params.id}} Edit </h3>
        <p>Locale: {{$route.query.locale}}.</p>
        <p>Analytics: {{$route.query.q}}.</p>
        <div style="height: 800px" ></div>
        <p id="data">Some tex below.</p>
    </div>
</template>